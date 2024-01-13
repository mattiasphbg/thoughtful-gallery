import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    return <p>category: {router.query.category}</p>;
}
