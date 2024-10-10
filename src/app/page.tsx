import { PageWrapper, Text } from "@/components";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Text as="h1" size="xl" variant="dark" className="mb-4">
          Welcome
        </Text>
        <Text as="p" size="base">
          NextJS & TailwindCSS 3.4 starter
        </Text>
      </main>
    </PageWrapper>
  );
}
