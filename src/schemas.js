import {schema} from 'normalizr';

export const blogSchema = new schema.Entity(
    "blogs",
    {},
    {idAttribute: "_id"}
)