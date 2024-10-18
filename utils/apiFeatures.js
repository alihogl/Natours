class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // 1-A) Filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    /* const query =  Tour.find().where('duration).equals(5).where('difficulty').equals('easy') */
    // 1-B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    // 2) Sorting
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');

      // query.sort() can take two or more argument which ares first to main sortering rule, and others for optional rules to apply to fields
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    // 3) Field Limiting

    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      // query.select() can take two or more argument which ares first to main sortering rule, and others for optional rules to apply to fields

      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    // 4) Pagination
    const page = this.queryString.page || 1;
    const limit = this.queryString.limit * 1 || 100;

    const skip = (page - 1) * limit;
    // query.skip(val) method is skipping to 'val' value from start, query.limit(num) is shows num values after reach the skipping end.
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
