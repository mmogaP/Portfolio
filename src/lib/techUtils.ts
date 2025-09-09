import { technologyCategories } from "./constants";

export const technologies = Object.entries(technologyCategories).flatMap(([category, data]) =>
    data.techs.map(tech => ({
        name: tech.name,
        category: category,
        level: tech.level,
        proficiency: getLevelPercentage(tech.level), // Convert level to percentage
        color: data.color
    }))
);

// Function to convert level string to percentage
function getLevelPercentage(level: string) {
    const levelMap = {
        'Principiante': 20, // 20-30%
        'Básico': 40, // 40-55%
        'Intermedio': 60, // 60-75%
        'Avanzado': 80, // 80-95%
        'Experto': 100 // 95-100%
    };
    return levelMap[level as keyof typeof levelMap];
}

// Function to get category info for a technology
export function getTechCategoryInfo(tech: string) {
    for (const [category, data] of Object.entries(technologyCategories)) {
        if (data.techs.some(t => t.name.toLowerCase() === tech.toLowerCase())) {
            return { category, color: data.color };
        }
    }
    return { category: 'other', color: 'bg-slate-500 hover:bg-slate-600 text-white border-slate-500' };
}

// Función auxiliar para obtener tecnologías por nivel
export const getTechsByLevel = (level: string) => {
    return technologies.filter(tech => tech.level === level);
};

// Función auxiliar para obtener estadísticas de niveles
export const getLevelStats = () => {
    const stats: { [level: string]: number } = {};
    technologies.forEach(tech => {
        stats[tech.level] = (stats[tech.level] || 0) + 1;
    });
    return stats;
};