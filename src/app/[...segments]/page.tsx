interface SectionPageProps {
  params: { sectionNames: string[] };
}

export default function SectionPage({ params }: SectionPageProps) {
  const { sectionNames } = params;

  return <div>Section {sectionNames.join('/')}</div>;
}
