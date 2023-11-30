import axios from "axios";
import "./SomeQuestion.css";
import { useEffect, useState } from "react";
import { basedDomin } from "../../../Api/basedDomin";
import { ErrorComponent } from "../../../Others/Error";
import { useNavigate } from "react-router-dom";

function SomeQuestion() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  // Get contact-us-data
  const getContactUs = () => {
    axios
      .get(`${basedDomin}/public/contact-us-data`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(({ data }) => {
        setQuestions(data.data.questions);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Get contact-us-data
  useEffect(() => {
    getContactUs();
  }, []);
  return (
    <div className="SomeQuestion mx-auto" id="questions">
      <div
        className="accordion mt-5 accordion-flush d-flex flex-column gap-1"
        id="accordionFlushExample"
      >
        {questions?.map((item) => (
          <div className="accordion-item border-bottom rounded-0" key={item.id}>
            <h2 className="accordion-header" id={`flush-heading-${item.id}`}>
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse-${item.id}`}
                aria-expanded="false"
                aria-controls={`flush-collapse-${item.id}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`flush-collapse-${item.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading-${item.id}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body p-0 pb-4">{item.description}</div>
            </div>
          </div>
        ))}
        {/* <div className="accordion-item border-bottom rounded-0">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              كيف اتجنب الاخطاء الواردة عند عمل السيرة الذاتية ؟
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0 pb-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item border-bottom rounded-0">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button px-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              كيف اتجنب الاخطاء الواردة عند عمل السيرة الذاتية ؟
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-0 pb-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SomeQuestion;
