import axios from "axios";
const KEY = "AIzaSyClrk-LP64TeA9jXDtGyEdYDe9jpbz6gnk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
