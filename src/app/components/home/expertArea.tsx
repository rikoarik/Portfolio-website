import { SiSqlite } from "react-icons/si";
function SkillCard({ logoSrc, skillName }: SkillCardProps) {
    return (
        <div className="group text-center">
            <div className="grid transition-transform duration-500 hover:scale-105 hover:shadow-lg lg:group-hover:animate-once lg:group-hover:animate-duration-[2000ms] lg:group-hover:animate-ease-linear place-content-center rounded-lg bg-secondary p-3 dark:bg-dark-2 dark:group-hover:bg-primary dark:group-hover:bg-opacity-50">
                <img src={logoSrc} alt={`${skillName} logo`} className="h-8 w-8" />
            </div>
            <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                {skillName}
            </p>
        </div>
    );
}

export default function ExpertArea() {
    const skills = [
        { logoSrc: "https://img.icons8.com/color/48/android-studio--v3.png", skillName: "Android Studio" },
        { logoSrc: "https://img.icons8.com/color/100/kotlin.png", skillName: "Kotlin" },
        { logoSrc: "https://img.icons8.com/fluency/100/java-coffee-cup-logo.png", skillName: "Java" },
        { logoSrc: "https://img.icons8.com/color/100/google-firebase-console.png", skillName: "Firebase" },
        { logoSrc: "https://img.icons8.com/color/100/nodejs.png", skillName: "Node.js" },
        { logoSrc: "https://img.icons8.com/color/100/mysql.png", skillName: "MySQL" },
        { logoSrc: "https://img.icons8.com/color/100/git.png", skillName: "Git" },
        { logoSrc: "https://img.icons8.com/ios/100/sqlite.png", skillName: "SQLite"},
        { logoSrc: "https://img.icons8.com/color/100/python.png", skillName: "Python" },

    ];

    return (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
                <SkillCard key={index} logoSrc={skill.logoSrc} skillName={skill.skillName} />
            ))}
        </div>
    );
}
