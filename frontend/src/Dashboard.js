import React from "react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((Response) => Response.json())
      .then((res) => {
        const coursesWithRandomData = res.map((cor) => ({
          ...cor,
          dueDate: generateRandomDueDate(),
          progress: generateRandomProgress(),
        }));
        setCourse(coursesWithRandomData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const generateRandomDueDate = () => {
    const currentDate = new Date();
    const dueDate = new Date(
      currentDate.getTime() +
        Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    );
    return dueDate.toDateString();
  };

  const generateRandomProgress = () => {
    return Math.floor(Math.random() * 101); // Generate a random progress value between 0 and 100
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-4 ">
        <table class=" text-center table border  text-dark shadow-lg  p-3 mb-5 bg-body rounded">
          <thead>
            <tr class="table-info">
              <th scope="col">STUDENT NAME</th>
              <th scope="col"> THUMBNAIL</th>
              <th scope="col"> ENROLLED COURSES </th>
              <th scope="col"> INSTRUCTOR NAME </th>
              <th scope="col"> DUE DATE </th>
              <th scope="col"> PROGRESS BAR</th>
              <th scope="col">COMPLETED </th>
            </tr>
          </thead>
          <tbody>
            {course.map((c, i) =>
              c.students.map((s, i) => (
                <tr key={i} class="table-light">
                  <td> {s.name}</td>
                  <td>
                    <img src={c.thumbnail} style={{ width: 50, height: 50 }} />
                  </td>
                  <td> {c.name}</td>
                  <td> {c.instructor}</td>
                  <td>{c.dueDate} </td>

                  <td>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: `${c.progress}%` }}
                        aria-valuenow={c.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {c.progress}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="form-check justify-content-center d-flex">
                      <input
                        class="form-check-input "
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                      ></label>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
