import { ChangeEvent, FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import styles from './styles.module.css';
import { TextArea } from '../../components/textArea';
import { GetServerSideProps } from 'next';

import { db } from '../../services/firebaseConnection';
import {
    doc,
    collection,
    query,
    where,
    getDoc,
    addDoc,
    getDocs,
    deleteDoc,
} from 'firebase/firestore';
import { FaTrash } from 'react-icons/fa';
import { log } from 'console';

interface TaskProps {
    item: {
        tarefa: string,
        public: boolean,
        created: string,
        user: string,
        taskId: string,
    };
    allComments: CommentProps[]
}

interface CommentProps {
    id:string;
    comment: string;
    taskId: string;
    user: string;
    name: string;
}

export default function Task({ item, allComments }: TaskProps) {
    const { data: session } = useSession();
    const [input, setInput] = useState("");
    const [comments, setComments] = useState<CommentProps[]>(allComments || []);

    async function handleRegisterComment(event: FormEvent) {
        event.preventDefault();

        if(input === "") return;

        if(!session?.user?.email || !session?.user?.name) return;

        try {

            const docRef = await addDoc(collection(db, "comments"), {
                comment: input,
                created: new Date,
                user: session?.user?.email,
                name: session?.user?.name,
                taskId: item?.taskId,
            })

            const data = {
                id: docRef.id,
                comment: input,
                user: session?.user?.email,
                name: session?.user?.name,
                taskId: item?.taskId
            }

            setComments((oldItens) => [...oldItens, data]);
            setInput("");

        } catch (error) {
            console.log(error);
        }
    }

    async function handleDeleteComment(id: string) {
        try {
            
            const docRef = doc(db, "comments", id);
            await deleteDoc(docRef);

            const deleteComment = comments.filter((item) => item.id !== id);
            setComments(deleteComment);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Tarefa - Detalhes da tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>

                <article className={styles.task}>
                    <p>
                        {item.tarefa}
                    </p>
                </article>
            </main>

            <section className={styles.commentsContainer}>
                <h2>Deixar comentários</h2>

                <form onSubmit={handleRegisterComment}>
                    <TextArea
                        placeholder='Digite seu comentário...'
                        value={input}
                        onChange={ (event:ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value) }
                    />

                    <button
                        disabled={!session?.user}
                        className={styles.button}
                        type='submit'
                    >Enviar comentário</button>
                </form>
            </section>

            <section className={styles.commentsContainer}>
                <h2>Todos comentários</h2>

                {comments.length === 0 && (
                    <span>Nenhum comentário encontrado... :(</span>
                )}

                {comments.map((item) => (
                    <article key={item.id} className={styles.comment}>
                        <div className={styles.headComment}>
                            <label className={styles.commentsLabel}>{item.name}</label>
                            {item.user === session?.user?.email && (
                                <button className={styles.buttonTrash}>
                                    <FaTrash onClick={() => handleDeleteComment(item.id)} size={18} color='#EA3140'/>
                                </button>
                            )}
                        </div>
                        <p>{item.comment}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const id = params?.id as string;

    const docRef = doc(db, "tasks", id);

    const q = query(collection(db, "comments"), where("taskId", "==", id));
    const snapshotComments = await getDocs(q);

    let allComments: CommentProps[] = [];

    snapshotComments.forEach((doc) => {
        allComments.push({
            id: doc.id,
            comment: doc.data().comment,
            user: doc.data().user,
            name: doc.data().name,
            taskId: doc.data().taskId,
        })
    })

    const snapshot = await getDoc(docRef);

    if(snapshot.data() === undefined) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    if(!snapshot.data()?.public) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const miliseconds = snapshot.data()?.created?.seconds * 1000;
    const task = {
        tarefa: snapshot.data()?.tarefa,
        public: snapshot.data()?.public,
        created: new Date(miliseconds).toLocaleDateString(),
        user: snapshot.data()?.user,
        taskId: id,
    }

    return {
        props: {
            item: task,
            allComments: allComments,
        },
    }

}