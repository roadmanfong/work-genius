// GraphQL types
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
} from 'graphql';

let PTOType = new GraphQLObjectType({
	name: 'PTO',
	description: 'A PTO object',
	fields: () => ({
		'id': {
			type: GraphQLID,
			description: 'PTO ID'
		},
		'start_date': {
			type: GraphQLString,
			description: 'PTO start date'
		},
		'end_date': {
			type: GraphQLString,
			description: 'PTO end date'
		},
		'applicant': {
			type: GraphQLString,
			description: 'PTO applicant'
		},
		'hours': {
			type: GraphQLString,
			description: 'Total hours of PTO'
		},
		'status': {
			type: GraphQLString,
			description: 'Current pto application status'
		},
		'applied_date': {
			type: GraphQLString,
			description: 'Date when this PTO application is applied'
		}
	})
});

export default PTOType;