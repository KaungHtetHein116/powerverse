//
//  RCTDeviceCheck.m
//  powerverse
//
//  Created by Kaung Htet Hein on 17/04/2024.
//

#import <Foundation/Foundation.h>
#import "RCTDeviceCheck.h"
#import <TargetConditionals.h>

@implementation RCTDeviceCheck

// To export a module named RCTDeviceCheck
RCT_EXPORT_MODULE();

// Expose the isEmulator function
RCT_EXPORT_METHOD(isEmulator:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    #if TARGET_IPHONE_SIMULATOR
        resolve(@(YES));
    #else
        resolve(@(NO));
    #endif
}

@end
