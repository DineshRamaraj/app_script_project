import React, { useState } from 'react';
import { Icons } from './Icons';

const FilterSection = ({ title, options, selectedOptions, onSelectOption, isOpen, onToggle }) => {
    return (
        <div className="filter-section">
            <button className="filter-summary" onClick={onToggle}>
                <span className="filter-title">{title}</span>
                <span className={`filter-arrow ${isOpen ? 'open' : ''}`}>
                    <Icons.ChevronDown />
                </span>
            </button>
            {isOpen && (
                <div className="filter-content">
                    <div className="filter-all-select" onClick={() => {
                    }}>All</div>
                    {options.map((opt) => (
                        <label key={opt} className="filter-checkbox-row">
                            <input
                                type="checkbox"
                                checked={selectedOptions ? selectedOptions.includes(opt) : false}
                                onChange={() => onSelectOption && onSelectOption(opt)}
                            />
                            <span className="checkmark"></span>
                            <span className="label-text">{opt}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

const Filters = ({
    categories,
    occasions,
    fabrics,

    selectedCategories,
    selectedOccasions,
    selectedFabrics,

    onSelectCategory,
    onSelectOccasion,
    onSelectFabric,

    onClearFilters
}) => {
    const [openSections, setOpenSections] = useState({
        'ideal-for': true,
        'occasion': false,
        'work': false,
        'fabric': false,
        'segment': false,
        'suitable-for': false,
        'raw-materials': false,
        'pattern': false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className="filters-sidebar">
            <div className="filter-group-container">
                <label className="customizable-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark-box"></span>
                    <span className="bold-label">CUSTOMIZABLE</span>
                </label>

                <FilterSection
                    title="IDEAL FOR"
                    options={categories || []}
                    selectedOptions={selectedCategories}
                    onSelectOption={onSelectCategory}
                    isOpen={openSections['ideal-for']}
                    onToggle={() => toggleSection('ideal-for')}
                />

                <FilterSection
                    title="OCCASION"
                    options={occasions || []}
                    selectedOptions={selectedOccasions}
                    onSelectOption={onSelectOccasion}
                    isOpen={openSections['occasion']}
                    onToggle={() => toggleSection('occasion')}
                />

                <FilterSection
                    title="FABRIC"
                    options={fabrics || []}
                    selectedOptions={selectedFabrics}
                    onSelectOption={onSelectFabric}
                    isOpen={openSections['fabric']}
                    onToggle={() => toggleSection('fabric')}
                />

                <FilterSection
                    title="WORK"
                    options={[]}
                    isOpen={openSections['work']}
                    onToggle={() => toggleSection('work')}
                />
                <FilterSection title="SEGMENT" options={[]} isOpen={openSections['segment']} onToggle={() => toggleSection('segment')} />
                <FilterSection title="SUITABLE FOR" options={[]} isOpen={openSections['suitable-for']} onToggle={() => toggleSection('suitable-for')} />
                <FilterSection title="RAW MATERIALS" options={[]} isOpen={openSections['raw-materials']} onToggle={() => toggleSection('raw-materials')} />
                <FilterSection title="PATTERN" options={[]} isOpen={openSections['pattern']} onToggle={() => toggleSection('pattern')} />

            </div>
        </aside>
    );
};

export default Filters;
