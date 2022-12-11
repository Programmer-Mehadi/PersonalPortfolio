import { createContext, useState } from "react";

export const projectContext = createContext();


const ProjectProvider = ({ children }) => {

    const [projectId, setProjectID] = useState(null);
    const projectInfo = {
        projectId,
        setProjectID
    }
    return (
        <projectContext.Provider value={projectInfo}>{
            children}</projectContext.Provider>
    )
}

export default ProjectProvider;