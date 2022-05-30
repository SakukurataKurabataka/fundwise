import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../components/Layout";

import { UploadReceipt } from "../components/uploadReceipt";

export default function Home() {
  const router = useRouter();
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authAccount.id) {
      router.push("/signin");
    }
  }, []);

  return (
    <section className=" container flex flex-col items-center justify-center p-8">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-4">Pengeluaran</h1>
        <UploadReceipt />
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
