interface Project {
  id: string;
  slug: string;
  title: string;
  desc: string;
}

interface Task {
  id: string;
  title: string;
  desc: string;
  type: string;
}

interface User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface ProjectMembers {}
