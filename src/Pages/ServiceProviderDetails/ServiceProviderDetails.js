import React from "react";
import "./ServiceProviderDetails.css";
import { trans } from "../../Components/Navbar/Navbar";
import TopHead from "./Components/TopHead/TopHead";
import Details from "./Components/Details/Details";
import CustomerRating from "./Components/CustomerRating/CustomerRating";
const disc =
  "ورشة الهلال للميكانكا هي ورشة متخصصة لتصليح السيارات الملاكي والنقل وجميع انواع الصيانة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ";

function ServiceProviderDetails() {
  return (
    <>
      <div className="ServiceProviderDetails">
        <div className="Top py-5 bg-white">
          <div className="container">
            <h3 className="fs-24-700 mb-5">
              {trans("service_provider.title")}
            </h3>
            <TopHead />
            <Details disc={disc} />
          </div>
        </div>
        {/* Bootom */}
        <div className="Rating mt-3 py-5 bg-white">
          <div className="container">
            <CustomerRating />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceProviderDetails;
