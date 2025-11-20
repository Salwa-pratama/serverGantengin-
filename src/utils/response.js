// Response Sukses
export const success = (res, data, message) => {
  return res.json({ status: "success", message, data });
};

// Response Failed
export const error = (res, message = "error", code=500) => {
    return res.status(code).json({status:false, message})
}
