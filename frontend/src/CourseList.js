import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CourseList() {
  const [course, setCourse] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [searchList, setSearchList] = useState([]);

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

  function handleSearch(v) {
    setSearch(v);
    setIsSearch(true);

    if (v != "") {
      const filteredCourses = course.filter((course) => {
        const courseNameMatch = course.name
          .toLowerCase()
          .includes(v.toLowerCase());
        const instructorMatch = course.instructor
          .toLowerCase()
          .includes(v.toLowerCase());

        return courseNameMatch || instructorMatch;
      });

      setSearchList(filteredCourses);
    } else {
      setIsSearch(false);
    }
  }

  return (
    <div className="container my-4  ">
      <div className="card card-body mb-3 border-1 align-items-center">
        <div className="row">
          <div className="col-3">
            <label className="fw-bold fs-4"> SEARCH :</label>
          </div>

          <div className="col-9">
            <input
              type="text"
              placeholder="Enter Course Name or Instructor Name"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                width: 500,
                marginLeft: 7,
                padding: 10,
                borderRadius: 5,
              }}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {isSearch
            ? searchList.map((s, i) => (
                <div key={i} className="card card-body mb-3 border-1">
                  <Link to={`/courses/${s.id}`}>
                    <h4>Course Name : {s.name}</h4>
                  </Link>
                  <h5> Instructor Name : {s.instructor}</h5>
                  <h5> Enrollment Status :{s.enrollmentStatus}</h5>
                </div>
              ))
            : course.map((s, i) => (
                <div key={i} className="card card-body mb-3 border-1">
                  <Link to={`/courses/${s.id}`}>
                    <h4>Course Name : {s.name}</h4>
                  </Link>
                  <h5> Instructor Name : {s.instructor}</h5>
                  <h5> Enrollment Status :{s.enrollmentStatus}</h5>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
