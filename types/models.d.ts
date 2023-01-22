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

interface ProjectMembers {}
