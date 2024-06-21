const Reviewer = require("../model/reviewer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { CreateError } = require("../utilis/createError");

// Create a new reviewer
exports.createReviewer = async (
  username,
  email,
  password,
  Oname,
  CFPid,
  field
) => {
  try {
    const reviewer = new Reviewer({
      username,
      email,
      password,
      Oname,
      CFPid,
      field,
    });
    const savedReviewer = await reviewer.save();
    // res.status(201).send("Reviewer has been Created!")
    return savedReviewer;
  } catch (err) {
    throw new Error(err.message);
  }
};

// // Find reviewers by CFPid
// exports.findReviewersByCFPid = async (req, res, next) => {
//   try {
//     const { CFPid } = req.body;
//     const reviewers = await Reviewer.find({ CFPid });
//     res.status(200).json(reviewers);
//   } catch (err) {
//     next(err);
//   }
// };

// Find reviewers by CFPid
exports.findReviewersByCFPid = async (req, res, next) => {
  try {
    const { CFPid } = req.params;
    const reviewers = await Reviewer.find({ CFPid });
    res.status(200).json(reviewers);
  } catch (err) {
    next(err);
  }
};

// Get all reviewers
exports.getAllReviewers = async () => {
  try {
    const reviewers = await Reviewer.find();
    return reviewers;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get a single reviewer by ID
exports.getReviewerById = async (id) => {
  try {
    const reviewer = await Reviewer.findById(id);
    return reviewer;
  } catch (err) {
    throw new Error(err.message);
  }
};

// // Delete a reviewer by ID
// exports.deleteReviewerById = async (id) => {
//   try {
//     const deletedReviewer = await Reviewer.findByIdAndDelete(id);
//     return deletedReviewer;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };

// Delete reviewer by ID
exports.deleteReviewerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Reviewer.findByIdAndDelete(id);
    res.status(200).json({ message: "Reviewer deleted successfully" });
  } catch (err) {
    next(err);
  }
};

exports.login_r = async (req, res, next) => {
  try {
    const user = await Reviewer.findOne({ email: req.body.email });

    if (!user) return next(CreateError(404, "user not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(400, "wrong password or username!");

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};