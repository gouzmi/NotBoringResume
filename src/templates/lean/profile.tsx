import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import type { Profile as ProfileProps } from "@/types/cv";

function Profile({ image, name, position }: ProfileProps) {
  return (
    <ContentSection className="pt-5">
      <img src={image} alt={name} className="w-48 h-52 object-cover mx-auto mb-4" />
      <Text as="h2" variant="base" className="text-black font-semibold">
        {name}
      </Text>
      <Text as="p" variant="sm" className="uppercase">
        {position}
      </Text>
    </ContentSection>
  );
}

export default Profile;
