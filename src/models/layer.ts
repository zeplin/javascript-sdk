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


import {
    BlendModeEnum,
    transformBlendModeEnumToJSON,
    transformJSONToBlendModeEnum
} from './blend-mode-enum';
import {
    BoundingRectangle,
    transformBoundingRectangleToJSON,
    transformJSONToBoundingRectangle
} from './bounding-rectangle';
import {
    LayerBlur,
    transformLayerBlurToJSON,
    transformJSONToLayerBlur
} from './layer-blur';
import {
    LayerBorder,
    transformLayerBorderToJSON,
    transformJSONToLayerBorder
} from './layer-border';
import {
    LayerFill,
    transformLayerFillToJSON,
    transformJSONToLayerFill
} from './layer-fill';
import {
    LayerShadow,
    transformLayerShadowToJSON,
    transformJSONToLayerShadow
} from './layer-shadow';
import {
    LayerTextStyle,
    transformLayerTextStyleToJSON,
    transformJSONToLayerTextStyle
} from './layer-text-style';


export const transformLayerToJSON = function (value: Layer): any {
    return {
        id: value.id,
        source_id: value.sourceId,
        type: value.type,
        name: value.name,
        rect: transformBoundingRectangleToJSON(value.rect),
        fills: value.fills && value.fills.map(transformLayerFillToJSON),
        borders: value.borders && value.borders.map(transformLayerBorderToJSON),
        shadows: value.shadows && value.shadows.map(transformLayerShadowToJSON),
        blur: value.blur && transformLayerBlurToJSON(value.blur),
        opacity: value.opacity,
        blend_mode: value.blendMode && transformBlendModeEnumToJSON(value.blendMode),
        border_radius: value.borderRadius,
        rotation: value.rotation,
        exportable: value.exportable,
        content: value.content,
        text_styles: value.textStyles && value.textStyles.map(transformLayerTextStyleToJSON),
        layers: value.layers && value.layers.map(transformLayerToJSON),
        component_name: value.componentName
    }
}

export const transformJSONToLayer = function (value: any): Layer {
    return {
        id: value.id,
        sourceId: value.source_id,
        type: value.type,
        name: value.name,
        rect: transformJSONToBoundingRectangle(value.rect),
        fills: value.fills && value.fills.map(transformJSONToLayerFill),
        borders: value.borders && value.borders.map(transformJSONToLayerBorder),
        shadows: value.shadows && value.shadows.map(transformJSONToLayerShadow),
        blur: value.blur && transformJSONToLayerBlur(value.blur),
        opacity: value.opacity,
        blendMode: value.blend_mode && transformJSONToBlendModeEnum(value.blend_mode),
        borderRadius: value.border_radius,
        rotation: value.rotation,
        exportable: value.exportable,
        content: value.content,
        textStyles: value.text_styles && value.text_styles.map(transformJSONToLayerTextStyle),
        layers: value.layers && value.layers.map(transformJSONToLayer),
        componentName: value.component_name
    }
}

/**
 * 
 * @export
 * @interface Layer
 */
export interface Layer {
    /**
     * Layer\'s unique id
     * @type {string}
     * @memberof Layer
     */
    id: string;
    /**
     * Layer\'s identifier in the design tool
     * @type {string}
     * @memberof Layer
     */
    sourceId?: string;
    /**
     * Type of the layer
     * @type {string}
     * @memberof Layer
     */
    type: 'text' | 'shape' | 'group';
    /**
     * Name of the layer
     * @type {string}
     * @memberof Layer
     */
    name?: string;
    /**
     * 
     * @type {BoundingRectangle}
     * @memberof Layer
     */
    rect: BoundingRectangle;
    /**
     * Fills applied to the layer
     * @type {Array<LayerFill>}
     * @memberof Layer
     */
    fills?: Array<LayerFill>;
    /**
     * Borders of the layer
     * @type {Array<LayerBorder>}
     * @memberof Layer
     */
    borders?: Array<LayerBorder>;
    /**
     * Shadows applied to the layer
     * @type {Array<LayerShadow>}
     * @memberof Layer
     */
    shadows?: Array<LayerShadow>;
    /**
     * 
     * @type {LayerBlur}
     * @memberof Layer
     */
    blur?: LayerBlur;
    /**
     * Opacity of the layer, [0, 1]
     * @type {number}
     * @memberof Layer
     */
    opacity: number;
    /**
     * 
     * @type {BlendModeEnum}
     * @memberof Layer
     */
    blendMode?: BlendModeEnum;
    /**
     * Border radius of the layer
     * @type {number}
     * @memberof Layer
     */
    borderRadius?: number;
    /**
     * Rotation of the layer
     * @type {number}
     * @memberof Layer
     */
    rotation?: number;
    /**
     * Indicates whether the layer has assets or not
     * @type {boolean}
     * @memberof Layer
     */
    exportable?: boolean;
    /**
     * Text of the text layer
     * @type {string}
     * @memberof Layer
     */
    content?: string;
    /**
     * 
     * @type {Array<LayerTextStyle>}
     * @memberof Layer
     */
    textStyles?: Array<LayerTextStyle>;
    /**
     * 
     * @type {Array<Layer>}
     * @memberof Layer
     */
    layers?: Array<Layer>;
    /**
     * Name of the component the group layer is referencing
     * @type {string}
     * @memberof Layer
     */
    componentName?: string;
}


