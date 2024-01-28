import { notFound } from "next/navigation";

interface Props {
  params: { id: string }
}


export default function ({ params }: Props) {

  const { id } = params;

  id === 'kid' && notFound();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}