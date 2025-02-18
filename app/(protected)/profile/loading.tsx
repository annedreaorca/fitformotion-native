import { Spinner } from "@heroui/spinner";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner label="Loading..." color="primary" />
      </div>
    </>
  );
}
