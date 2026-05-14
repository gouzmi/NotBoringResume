import type { Project } from "@/types/cv";
import { AddButton, DeleteButton } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProjectsInputProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

function ProjectsInput({ projects, onChange }: ProjectsInputProps) {
  const updateProject = (index: number, updated: Project) => {
    const newProjects = [...projects];
    newProjects[index] = updated;
    onChange(newProjects);
  };

  return (
    <div className="flex flex-col gap-3 pl-2 border-l">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <Label className="text-xs text-gray-500">Name</Label>
            <Input
              type="text"
              value={project.name}
              onChange={(e) =>
                updateProject(index, { ...project, name: e.target.value })
              }
            />
            <DeleteButton
              onClick={() => onChange(projects.filter((_, i) => i !== index))}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Year</Label>
            <Input
              type="text"
              value={project.year}
              onChange={(e) =>
                updateProject(index, { ...project, year: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Description</Label>
            <Textarea
              value={project.description}
              onChange={(e) =>
                updateProject(index, { ...project, description: e.target.value })
              }
            />
          </div>
        </div>
      ))}
      <AddButton
        onClick={() =>
          onChange([...projects, { name: "", year: "", description: "" }])
        }
      />
    </div>
  );
}

export default ProjectsInput;
