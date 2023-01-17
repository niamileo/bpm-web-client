import Link from "next/link";
import Image from "next/image";
import Eye from "components/SVG/Eye.svg";
import Heart from "components/SVG/Heart.svg";

interface GalleryProps {
  title?: string;
  subtitle?: string;
  href?: string;
  likes?: number;
  views?: number;
}

export default function GalleryCard({
  title = "",
  subtitle = "",
  href = "#",
  likes = 0,
  views = 0,
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
          />
          <div>
            <div>{title}</div>
            <div className="text-muted">{subtitle}</div>
          </div>
          <div className="ms-auto">
            <a href="#" className="text-muted">
              <Eye />
              {views}
            </a>
            <a href="#" className="ms-3 text-muted">
              <Heart />
              {likes}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
