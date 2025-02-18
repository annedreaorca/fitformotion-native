import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";
import { IconSearch } from "@tabler/icons-react";

export default function SidebarSearch() {
  return (
    <Input
      labelPlacement="outside"
      placeholder="Search..."
      className="px-5 mb-3"
      radius="sm"
      startContent={<IconSearch />}
      endContent={
        <Kbd
          classNames={{ base: "shadow-none bg-zinc-900" }}
          keys={["command"]}
        >
          F
        </Kbd>
      }
    />
  );
}
