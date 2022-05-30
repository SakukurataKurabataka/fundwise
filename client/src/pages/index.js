import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../components/Layout";

import { UploadReceipt } from "../components/uploadReceipt";

export default function Home() {
  const router = useRouter()
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    if(!authAccount.id){
      router.push('/signin')
    }
  }, [])
  

  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <UploadReceipt />
    </div>
  );
}

// Home.layout = (content) => (
//   <DashboardLayout>
//     {content}
//   </DashboardLayout>
// )