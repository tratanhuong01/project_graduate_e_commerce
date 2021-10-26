import React, { useState } from "react";
import useResetPage from "../hook/useResetPage";
import MapContact from "../components/Contact/ContentContact/MapContact/MapContact";
import FormContact from "../components/Contact/ContentContact/FormContact/FormContact";
import InfoContact from "../components/Contact/ContentContact/InfoContact/InfoContact";
import { PAGE_CONTACT } from "../constants/Config";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LevelUrl from "../components/General/LevelUrl/LevelUrl";
import thank__you from "../assets/images/thank__you.png";
function Contact(props) {
  //
  const [isSend, setIsSend] = useState(false);
  useResetPage("Liên hệ");
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second dark:text-white">
      <BreadcrumbsItem glyph="" to={PAGE_CONTACT}>
        Liên hệ
      </BreadcrumbsItem>
      <LevelUrl />
      <div className="xl:w-4/5 w-full mx-auto p-4">
        <MapContact />
        <div className="w-full flex flex-col xl:flex-row my-10">
          <div className="w-full xl:w-2/3 xl:pr-6 ">
            <p className="font-semibold text-3xl mb-2">Liên hệ với chúng tôi</p>
            <p className="text-xm text-gray-700 dark:text-gray-300">
              Để liên hệ và nhận các thông in khuyến mại sớm nhất, xin vui lòng
              điền đầy đủ thông tin của bạn vào form dưới đây. Chúng tôi sẽ liên
              lạc lại với bạn trong thời gian sớm nhất
            </p>
            {isSend ? (
              <div className="w-full flex items-center flex-wrap justify-center my-5">
                <img src={thank__you} alt="" className="w-1/3 object-cover" />
                <p className="w-full text-center my-5 font-semibold">
                  Cảm ơn bạn đã liên hệ với chúng tôi
                </p>
              </div>
            ) : (
              <FormContact setIsSend={setIsSend} />
            )}
          </div>
          <InfoContact />
        </div>
      </div>
      <hr className="my-2"></hr>
    </div>
  );
}

export default Contact;
