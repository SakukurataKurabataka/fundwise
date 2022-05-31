import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputExpense } from "../components/InputExpenses";
import { DashboardLayout } from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

import { UploadReceipt } from "../components/uploadReceipt";

// Import Swiper styles
import "swiper/css";
export default function Home() {
  const [receiptData, setReceiptData] = useState([]);
  const router = useRouter();
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authAccount.id) {
      router.push("/signin");
    }
  }, []);

  useEffect(() => {
    console.log(receiptData);
  }, [receiptData]);

  return (
    <section className=" container flex mx-auto flex-col items-center justify-center p-8">
      <div className="w-full">
        <h2 className="text-md font-bold">
          Hallo, {authAccount.name.split(" ")[0]}
        </h2>
        <h1 className="text-4xl font-bold mb-4">Pengeluaran</h1>
        <div>
          <UploadReceipt
            className="mx-auto mb-8"
            receiptData={receiptData}
            setReceiptData={setReceiptData}
          />
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {receiptData.map((item, index) => {
              return (
                <SwiperSlide>
                  <InputExpense
                    title={item.properties.description.value}
                    amount={item.properties.totalPrice.value}
                    date={new Date().toISOString().split("T")[0]}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
