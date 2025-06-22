const StudyModel = require("../Models/Study Materials.Model");
const PendingResource = require("../Models/PendingResource.Model");
const AsyncHandler = require("../Utils/AsyncHandler");
const ApiError = require("../Utils/ApiError");

// Add resource to pending list
const Add_Resource = AsyncHandler(async (req, res) => {
    const { name, description, category, type, link, submittedBy } = req.body;

    if (!name || !description || !category || !type || !link || !submittedBy) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const newResource = await PendingResource.create({
            name,
            description,
            category,
            type,
            link,
            submittedBy
        });

        return res.status(201).json({
            success: true,
            data: newResource,
            message: "Resource submitted successfully"
        });
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to save resource"
        });
    }
});

// Fetch approved study materials
const Fetch_Data = AsyncHandler(async (req, res) => {
    try {
        const FindAllData = await StudyModel.find(); // You can filter by status if needed
        return res.status(200).json({
            success: true,
            message: "Resources found",
            data: FindAllData
        });
    } catch (error) {
        throw new ApiError("Invalid DB Credentials!", 404);
    }
});

module.exports = { Fetch_Data, Add_Resource };
