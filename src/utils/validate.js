/**
 * @param {string} path
 * @description 校验是否为外部资源
 * @returns {Boolean}
 */
export function isExternal (path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
