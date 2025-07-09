export interface CustomTitle {
  heading: string;
  title: string;
  subtitle: string;
}

export interface Projects {
  projectName: string;
  title: string;
  startYear: string;
  type: string;
  liveUrl: string;
  techStack: {
    name: string;
  }[];
  description: {
    points: string;
  }[];
  images: {
    url: string;
  }[];
}
export interface FAQ {
  question: string;
  answer: string;
}
export interface Experience {
  designation: string;
  company: string;
  join: string;
  leave: string;
  city: string;
  country: string;
  work: {
    points: string;
  }[];
}
