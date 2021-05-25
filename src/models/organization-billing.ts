/* tslint:disable */
/* eslint-disable */
/**
 * Zeplin API
 * Access your resources in Zeplin
 *
 * Contact: support@zeplin.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */




export const transformOrganizationBillingToJSON = function (value: OrganizationBilling): any {
    return {
        total_seat_count: value.totalSeatCount,
        used_seat_count: value.usedSeatCount
    }
}

export const transformJSONToOrganizationBilling = function (value: any): OrganizationBilling {
    return {
        totalSeatCount: value.total_seat_count,
        usedSeatCount: value.used_seat_count
    }
}

/**
 * 
 * @export
 * @interface OrganizationBilling
 */
export interface OrganizationBilling {
    /**
     * Total number of seats reserved for the organization
     * @type {number}
     * @memberof OrganizationBilling
     */
    totalSeatCount: number;
    /**
     * Number of used seats for the organization
     * @type {number}
     * @memberof OrganizationBilling
     */
    usedSeatCount: number;
}

