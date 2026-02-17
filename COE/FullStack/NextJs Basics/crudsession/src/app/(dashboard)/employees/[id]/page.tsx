interface Props {
  params: {
    id: string;
  };
}

export default function EmployeeDetailPage({ params }: Props) {
  return (
    <div>
      <h1>Employee Details - {params.id}</h1>
      {/* Employee detail content */}
    </div>
  );
}
