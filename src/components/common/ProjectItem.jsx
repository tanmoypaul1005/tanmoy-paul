import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Column from "@/components/common/Column";
import Row from "@/components/common/Row";

const ProjectItem = ({ project }) => {
  return (
    <Column classes="w-full bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center justify-between text-center">
      <Column classes="w-full items-center justify-center">
        {project.image ? (
          <Link target="_blank" rel="noopener noreferrer" href={project?.url}>
            <Image
              style={{  minHeight:"220px", maxHeight: "220px",minWidth:"auto" }}
              src={project?.image}
              width="500"
              height="500"
              alt="projects"
            />
          </Link>
        ) : (
          <Row classes="w-[4rem] aspect-square bg-[var(--textColor10)] rounded-full p-[1rem] items-center justify-center">
            <Image
              src={project.icon}
              alt={`project-${project.title}`}
              width={100}
              height={100}
              sizes="100%"
              loading="lazy"
              placeholder="blur"
              blurDataURL={project.icon}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1",
              }}
            />
          </Row>
        )}

        <h4 className="mt-4 font-bold">{project.title}</h4>
        <Row classes="w-full items-center justify-center mt-4 gap-2">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              aria-label={`${project.title} GitHub URL`}
              target="_blank"
              className="app__icon_btn"
              style={{
                padding: "0.5rem",
              }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-md" />
            </Link>
          ) : null}

          {project.url ? (
            <Link
              href={project.url}
              aria-label={`${project.title} Project URL`}
              target="_blank"
              className="app__icon_btn"
              style={{
                padding: "0.5rem",
              }}
            >
              <FontAwesomeIcon icon={faEye} className="text-md" />
            </Link>
          ) : null}
        </Row>
      </Column>

      <Column classes="w-full mt-8 items-center">
        <p className="text-center">{project.description}</p>

        <Row classes="w-full items-center justify-center flex-wrap mt-4">
          {project.tags.map((tag, i) => {
            return (
              <small
                key={`tag-${i}`}
                className="bg-[var(--textColor10)] rounded-lg py-[0.45rem] px-[0.75rem] mr-2 mb-2 font-medium"
              >
                {tag}
              </small>
            );
          })}
        </Row>
      </Column>
    </Column>
  );
};

export default ProjectItem;
