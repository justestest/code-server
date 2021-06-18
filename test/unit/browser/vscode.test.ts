/**
 * @jest-environment jsdom
 */
import { JSDOM } from "jsdom"
import { getNlsConfiguration, nlsConfigElementId } from "../../../src/browser/pages/vscode"

describe("vscode", () => {
  describe("getNlsConfiguration", () => {
    beforeEach(() => {
      const { window } = new JSDOM()
      global.document = window.document
    })

    it("should return undefined if Document is undefined", () => {
      const actual = getNlsConfiguration(undefined as any as Document)
      const expected = undefined

      expect(actual).toBe(expected)
    })
    it("should return undefined if no nlsConfigElement", () => {
      const actual = getNlsConfiguration(global.document)
      const expected = undefined

      expect(actual).toBe(expected)
    })
    it("should return undefined if no nlsConfig", () => {
      const mockElement = document.createElement("div")
      mockElement.setAttribute("id", nlsConfigElementId)
      document.body.appendChild(mockElement)

      const actual = getNlsConfiguration(document)
      const expected = undefined

      expect(actual).toBe(expected)

      document.body.removeChild(mockElement)
    })
    it("should log an error if it can't parse the nlsConfig", () => {
      const consoleError = console.error
      let errorMessage = ""

      console.error = (x) => {
        errorMessage = x
      }

      const mockElement = document.createElement("div")
      const dataSettings = {
        first: "Jane",
        last: "Doe",
      }

      mockElement.setAttribute("id", nlsConfigElementId)
      mockElement.setAttribute("data-settings", JSON.stringify(dataSettings) + ",")
      document.body.appendChild(mockElement)

      getNlsConfiguration(global.document)

      expect(errorMessage).toBe("[vscode] Failed to read or parse the NLS configuration.")

      console.error = consoleError
      document.body.removeChild(mockElement)
    })
    it("should return the correct configuration", () => {
      const mockElement = document.createElement("div")
      const dataSettings = {
        first: "Jane",
        last: "Doe",
      }

      mockElement.setAttribute("id", nlsConfigElementId)
      mockElement.setAttribute("data-settings", JSON.stringify(dataSettings))
      document.body.appendChild(mockElement)
      const actual = getNlsConfiguration(global.document)

      expect(actual).toStrictEqual(dataSettings)

      document.body.removeChild(mockElement)
    })
  })
})
