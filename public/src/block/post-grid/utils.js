export const getCategoryNames = (categoryIds) => {
    // Fetch category names based on IDs (implement this based on your requirements)
    return categoryIds.map((id) => "Category Name"); // Replace with actual category name fetching logic
};

export const limitExcerpt = (excerpt, limit) => {
    // Limit the excerpt to a specified number of words
    return excerpt.split(' ').slice(0, limit).join(' ') + '...';
};

export const parseHTML = (htmlString) => {
    // Parse HTML string to JSX (use libraries like html-react-parser if necessary)
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
