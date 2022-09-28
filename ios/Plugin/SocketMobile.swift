import Foundation

@objc public class SocketMobile: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
