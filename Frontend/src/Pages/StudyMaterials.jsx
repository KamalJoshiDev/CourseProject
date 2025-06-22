import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { 
  XMarkIcon, 
  ChevronDownIcon, 
  FunnelIcon, 
  MinusIcon, 
  PlusIcon, 
  MagnifyingGlassIcon 
} from "@heroicons/react/24/solid";

// For outline icons (previously 24/outline):
import { 
  BookOpenIcon, 
  VideoCameraIcon, 
  DocumentTextIcon, 
  AcademicCapIcon, 
  CalculatorIcon, 
  BeakerIcon, 
  GlobeAltIcon, 
  CodeBracketIcon, 
  BookmarkIcon 
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const sortOptions = [
    { name: "Most Viewed", value: "views", current: true },
    { name: "Highest Rated", value: "rating", current: false },
    { name: "Newest Material", value: "date", current: false },
    { name: "Alphabetical", value: "alphabetical", current: false },
];

const categories = ["Mathematics", "Science", "History", "Computer Science", "Language Arts"];

const filters = [
    {
        id: "type",
        name: "Resource Type",
        options: [
            { value: "Notes", icon: DocumentTextIcon },
            { value: "Videos", icon: VideoCameraIcon },
            { value: "Quizzes", icon: AcademicCapIcon },
            { value: "Assignments", icon: BookOpenIcon },
        ],
    },
];

// Image mapping based on category
const categoryImages = {
    "Mathematics": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Science": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "History": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Computer Science": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Language Arts": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "default": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
};

// Icon mapping based on category
const categoryIcons = {
    "Mathematics": CalculatorIcon,
    "Science": BeakerIcon,
    "History": GlobeAltIcon,
    "Computer Science": CodeBracketIcon,
    "Language Arts": BookmarkIcon,
    "default": BookOpenIcon
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function StudyMaterials() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("views");

    // Get image based on category
    const getCategoryImage = (category) => {
        return categoryImages[category] || categoryImages["default"];
    };

    // Get icon based on category
    const getCategoryIcon = (category) => {
        return categoryIcons[category] || categoryIcons["default"];
    };

    // Sort products based on selected option
    const sortProducts = (products) => {
        switch (sortOption) {
            case "views":
                return [...products].sort((a, b) => (b.views || 0) - (a.views || 0));
            case "rating":
                return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
            case "date":
                return [...products].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
            case "alphabetical":
                return [...products].sort((a, b) =>
                    (a.name || a.title || "").localeCompare(b.name || b.title || "")
                );
            default:
                return products;
        }
    };

    const filteredProducts = sortProducts(
        products.filter((product) => {
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            const matchesType = !selectedType || product.type === selectedType;
            const matchesSearch = searchQuery === "" ||
                (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesCategory && matchesType && matchesSearch;
        })
    );

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:6800/api/v1/fetch");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                // Handle different API response structures
                const productsArray = Array.isArray(data) ? data :
                    Array.isArray(data.products) ? data.products :
                        Array.isArray(data.data) ? data.data : [];

                if (!productsArray.length) {
                    console.warn("No products found in API response");
                }

                // Add some mock data for sorting demonstration
                const productsWithMockData = productsArray.map((product) => ({
                    ...product,
                    views: Math.floor(Math.random() * 1000),
                    rating: Math.floor(Math.random() * 5) + 1,
                    createdAt: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString()
                }));

                setProducts(productsWithMockData);
                setError(null);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.message);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    const handleTypeChange = (type) => {
        setSelectedType(selectedType === type ? null : type);
    };

    const handleSortChange = (value) => {
        setSortOption(value);
    };

    const clearFilters = () => {
        setSelectedCategory(null);
        setSelectedType(null);
        setSearchQuery("");
    };

    const LoadingSkeleton = () => (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="group relative rounded-lg shadow-sm overflow-hidden animate-pulse">
                    <div className="aspect-w-1 aspect-h-1 w-full h-48 bg-gray-200 rounded-t-lg"></div>
                    <div className="p-4 space-y-3">
                        <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded"></div>
                            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const getTypeIcon = (type) => {
        const typeOption = filters[0].options.find(opt => opt.value === type);
        return typeOption ? typeOption.icon : DocumentTextIcon;
    };

    return (
        <div className="min-h-screen">
            <Link to="/AddData">
                <button
                    className=" inline-flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 rounded-lg shadow-md transition duration-300 ease-in-out lg: ml-36 mt-6"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>

                    Add Resource
                </button>
            </Link>



            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pt-20 pb-6 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Study Materials</h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Browse and discover educational resources
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search materials..."
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Menu as="div" className="relative inline-block text-left z-10">
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Sort
                                        <ChevronDownIcon className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" />
                                    </MenuButton>
                                </div>

                                <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => handleSortChange(option.value)}
                                                        className={classNames(
                                                            sortOption === option.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm w-full text-left'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </button>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="p-2 text-gray-400 hover:text-gray-500 lg:hidden border border-gray-300 rounded-md"
                            >
                                <FunnelIcon aria-hidden="true" className="size-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Active filters */}
                {(selectedCategory || selectedType || searchQuery) && (
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">Filters:</span>
                        {selectedCategory && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                {selectedCategory}
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {selectedType && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                {selectedType}
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setSelectedType(null)}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {searchQuery && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Search: "{searchQuery}"
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setSearchQuery("")}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        <button
                            onClick={clearFilters}
                            className="ml-2 text-sm text-indigo-600 hover:text-indigo-800"
                        >
                            Clear all
                        </button>
                    </div>
                )}



                {/* Main Content */}
                <section aria-labelledby="resources-heading" className="pt-6 pb-24">
                    <h2 id="resources-heading" className="sr-only">Study Resources</h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* Mobile Filters Dialog */}
                        <Dialog
                            open={mobileFiltersOpen}
                            onClose={() => setMobileFiltersOpen(false)}
                            className="lg:hidden"
                        >
                            <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
                            <DialogPanel className="fixed inset-0 z-40 flex">
                                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-gray-500"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Mobile Filter Content */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul className="px-4 py-3 space-y-3 border-b border-gray-200 text-sm font-medium text-gray-900">
                                            {categories.map((category) => (
                                                <li key={category}>
                                                    <button
                                                        type="button"
                                                        className={`w-full text-left ${selectedCategory === category ? "text-indigo-600 font-semibold" : "text-gray-600"}`}
                                                        onClick={() => {
                                                            handleCategoryChange(category);
                                                            setMobileFiltersOpen(false);
                                                        }}
                                                    >
                                                        {category}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure
                                                key={section.id}
                                                as="div"
                                                className="border-b border-gray-200 px-4 py-6"
                                            >
                                                <h3 className="-my-3 flow-root">
                                                    <DisclosureButton className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            <PlusIcon className="h-5 w-5 group-data-open:hidden" />
                                                            <MinusIcon className="h-5 w-5 group-not-data-open:hidden" />
                                                        </span>
                                                    </DisclosureButton>
                                                </h3>
                                                <DisclosurePanel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option) => {
                                                            const Icon = option.icon;
                                                            return (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        type="radio"
                                                                        id={`mobile-${section.id}-${option.value}`}
                                                                        name={`mobile-${section.id}`}
                                                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        checked={selectedType === option.value}
                                                                        onChange={() => {
                                                                            handleTypeChange(option.value);
                                                                            setMobileFiltersOpen(false);
                                                                        }}
                                                                    />
                                                                    <label
                                                                        htmlFor={`mobile-${section.id}-${option.value}`}
                                                                        className="ml-3 text-sm text-gray-600 flex items-center gap-2"
                                                                    >
                                                                        <Icon className="h-4 w-4" />
                                                                        {option.value}
                                                                    </label>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </DisclosurePanel>
                                            </Disclosure>
                                        ))}
                                    </form>
                                </div>
                            </DialogPanel>
                        </Dialog>

                        {/* Desktop Filters */}
                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>
                            <div className="space-y-4 border-b border-gray-200 pb-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Categories</h3>
                                <ul className="space-y-3 text-sm font-medium text-gray-900">
                                    {categories.map((category) => {
                                        const CategoryIcon = getCategoryIcon(category);
                                        return (
                                            <li key={category}>
                                                <button
                                                    type="button"
                                                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${selectedCategory === category
                                                        ? "bg-indigo-50 text-indigo-600 font-semibold"
                                                        : "text-gray-600 hover:bg-gray-50"}`}
                                                    onClick={() => handleCategoryChange(category)}
                                                >
                                                    <CategoryIcon className="h-5 w-5 mr-2" />
                                                    {category}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {filters.map((section) => (
                                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        <DisclosureButton className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                                <PlusIcon className="h-5 w-5 group-data-open:hidden" />
                                                <MinusIcon className="h-5 w-5 group-not-data-open:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel className="pt-6">
                                        <div className="space-y-4">
                                            {section.options.map((option) => {
                                                const Icon = option.icon;
                                                return (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            id={`${section.id}-${option.value}`}
                                                            name={`${section.id}`}
                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                            checked={selectedType === option.value}
                                                            onChange={() => handleTypeChange(option.value)}
                                                        />
                                                        <label
                                                            htmlFor={`${section.id}-${option.value}`}
                                                            className="ml-3 text-sm text-gray-600 flex items-center gap-2"
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            {option.value}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </form>

                        {/* Product Grid */}
                        <div className="lg:col-span-3">
                            {loading ? (
                                <LoadingSkeleton />
                            ) : error ? (
                                <div className="text-center py-10">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                        <XMarkIcon className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h3 className="mt-2 text-lg font-medium text-gray-900">Error loading materials</h3>
                                    <p className="mt-1 text-sm text-gray-500">{error}</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Retry
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    {filteredProducts.length > 0 ? (
                                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                            {filteredProducts.map((product) => {
                                                const TypeIcon = getTypeIcon(product.type);
                                                const CategoryIcon = getCategoryIcon(product.category);
                                                return (
                                                    <div
                                                        key={product.id || product._id}
                                                        className="group relative rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-200"
                                                    >
                                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-100">
                                                            <img
                                                                src={getCategoryImage(product.category)}
                                                                alt={product.name || product.title || "Study Material"}
                                                                className="h-48 w-full object-cover object-center group-hover:opacity-90"
                                                            />
                                                        </div>
                                                        <div className="p-4">
                                                            <div className="flex justify-between items-start">
                                                                <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                                                                    {product.name || product.title || "Untitled Resource"}
                                                                </h3>
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 ml-2">
                                                                    {product.type || "Unknown"}
                                                                </span>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500 flex items-center gap-1">
                                                                <CategoryIcon className="h-4 w-4" />
                                                                <span className="truncate">{product.category || "Uncategorized"}</span>
                                                            </p>
                                                            {product.description && (
                                                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                                                    {product.description}
                                                                </p>
                                                            )}
                                                            <div className="mt-4 flex items-center justify-between">
                                                                <div className="flex items-center text-sm text-gray-500">
                                                                    <TypeIcon className="h-4 w-4 mr-1" />
                                                                    {product.type || "Resource"}
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <span className="text-xs text-gray-500">
                                                                        {product.views || 0} views
                                                                    </span>
                                                                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                        View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="text-center py-16">
                                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                                <BookOpenIcon className="h-6 w-6 text-gray-400" />
                                            </div>
                                            <h3 className="mt-2 text-lg font-medium text-gray-900">
                                                {products.length === 0
                                                    ? "No study materials available yet"
                                                    : "No materials match your search and filters"}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {products.length === 0
                                                    ? "Check back later or contact your instructor."
                                                    : "Try adjusting your search or filters."}
                                            </p>
                                            {products.length > 0 && (
                                                <button
                                                    onClick={clearFilters}
                                                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                                >
                                                    Clear all filters
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}