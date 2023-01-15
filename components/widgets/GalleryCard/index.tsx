import Link from "next/link";
import Image from "next/image";

interface GalleryProps {
  title?: string;
  subtitle?: string;
  href?: string;
}

export default function GalleryCard({
  title = "",
  subtitle = "",
  href = "#",
}: GalleryProps) {
  return (
    <div className="card card-sm">
      <Link href={href} className="d-block">
        <Image
          alt=""
          src={require("assets/images/default-card-bg.jpg")}
          className="card-img-top"
          width="300"
          height="250"
        />
      </Link>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <span
            className="avatar me-3 rounded"
            style={{
              backgroundImage: require("assets/images/000f.jpg"),
            }}
          ></span>
          <div>
            <div>{title}</div>
            <div className="text-muted">{subtitle}</div>
          </div>
          <div className="ms-auto">
            <a href="#" className="text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
              </svg>
              369
            </a>
            <a href="#" className="ms-3 text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-filled text-red"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
              </svg>
              32
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
