const StudyModel = require("../Models/Study Materials.Model");
const PendingModel = require("../Models/PendingResource.Model");
const AsyncHandler = require("../Utils/AsyncHandler");
const ApiError = require("../Utils/ApiError");

const Add_Resource = AsyncHandler(async (req, res) => {
    const { name, description, category, type, link, submittedBy } = req.body;

    if (!name || !description || !category || !type || !link || !submittedBy) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const newResource = await PendingModel.create({
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

const Fetch_Pending_Resource = AsyncHandler(async (req, res) => {
   try {
        const FindAllData = await PendingModel.find();
        return res.status(200).json({
            success: true,
            message: "Resources found",
            data: FindAllData
        })
    } catch (error) {
        throw new ApiError("Invalid DB Credentials!", 404);
    }
      
});

const Fetch_Data = AsyncHandler(async (req, res) => {
    try {
        const FindAllData = await StudyModel.find();
        return res.status(200).json({
            success: true,
            message: "Resources found",
            data: FindAllData
        })
    } catch (error) {
        throw new ApiError("Invalid DB Credentials!", 404);
    }
});

module.exports = { Fetch_Data, Add_Resource ,Fetch_Pending_Resource };
