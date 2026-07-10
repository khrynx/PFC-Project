// DATA STORE

type EmptyObject = Record<never, never>;

interface Review {
  rating: number
  title: string
  message: string
}

interface Course {
  courseId: string;
  name: string;
  numStudentsTaken: number;
  reviews: Review[];
  courseStatus?: string;
}

interface Friend {
  // insert friend id, etc, maybe their year in uni?
}

interface Student {
  coursesTaken: Course[];
  premiumMember: boolean;
  friends: Friend[];
  degree: string;
};

interface Data {
  students: Student[];
};

const data: Data = {
  students: [],

};

// Use getData() to access the data
function getData(): Data {
  return data;
}

