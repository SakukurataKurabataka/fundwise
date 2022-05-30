import Head from "next/head";
import { UploadReceipt } from "../components/uploadReceipt";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <UploadReceipt />
    </div>
  );
}
