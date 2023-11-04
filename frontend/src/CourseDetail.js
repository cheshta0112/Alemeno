import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail() {
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((Response) => Response.json())
      .then((res) => {
        console.log(res);
        setCourse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const courseId = parseInt(id);
  const cor = course.find((cor) => cor.id === courseId);
  console.log("inside ", cor);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="container">
          <div className="row justify-content-center ">
            {cor ? (
              <div className="col-md-12 mt-4 ">
                <div className="card">
                  <div className="card-header px-5 py-3">
                    <h5 className="card-title ">COURSE DETAILS</h5>
                  </div>
                  <div class="card-body px-5 py-4">
                    <h5 class="card-title pb-3">COURSE NAME :{cor.name}</h5>
                    <h6 class="card-title pb-2 fs-5">
                      Instructor : {cor.instructor}
                    </h6>
                    <p class="card-text"> description :{cor.description}</p>
                    <p class="card-text">
                      Enrollment Status :{cor.enrollmentStatus}
                    </p>
                    <p class="card-text"> Duration :{cor.duration}</p>
                    <p class="card-text"> schedule :{cor.schedule}</p>
                    <p class="card-text"> Location :{cor.location}</p>
                    <p class="card-text">
                      Prerequisites:
                      {cor.prerequisites}
                    </p>

                    <p>
                      <a
                        class="btn btn-primary w-50"
                        data-bs-toggle="collapse"
                        href="#collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse"
                      >
                        Syllabus
                      </a>
                    </p>
                    <div class="collapse" id="collapse">
                      <div class="card card-body">
                        {cor.syllabus.map((element, i) => (
                          <div key={i}>
                            <p> Week : {element.week}</p>
                            <p> Topic: {element.topic}</p>
                            <p> Content : {element.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
