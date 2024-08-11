import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWFiYmM3ZGMwOTk1OTdmZTY3YjU4ZGQ1MzNkZWJmNyIsIm5iZiI6MTcyMzM5NTA5OS42MjIwNTgsInN1YiI6IjY2YjhlOTYyYWJjY2Y3NmMyYWFhYjRmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.97lfLfAh86uRBgaGQIW6eMpcEjcVEhcVMNoPB55oMwQ",
  },
});

export default instance;