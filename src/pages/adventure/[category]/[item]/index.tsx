import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    return <p>test: {router.query.item}</p>;
}
