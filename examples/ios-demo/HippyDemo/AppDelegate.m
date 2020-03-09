/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "HippyRootView.h"
@interface AppDelegate ()
{
  UINavigationController *rootViewController;
  UIViewController *mainViewController;
}
@end


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  mainViewController = [UIViewController new];
  mainViewController.view = [[NSBundle mainBundle] loadNibNamed:@"MainScreen" owner:self options:nil].lastObject;
  rootViewController = [[UINavigationController alloc] initWithRootViewController:mainViewController];
  mainViewController.edgesForExtendedLayout = UIRectEdgeNone;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  UIButton* feedBtn = [mainViewController.view viewWithTag:100];
  UIButton* detailBtn = [mainViewController.view viewWithTag:101];
  [feedBtn addTarget:self action:@selector(goFeed:) forControlEvents:UIControlEventTouchUpInside];
  [detailBtn addTarget:self action:@selector(goDetail:) forControlEvents:UIControlEventTouchUpInside];
  return YES;
}

-(void)goFeed:(UIButton *)button{
  [self gotoBuzWithModuleName:@"feed" bundleName:@"feed.ios"];
}

-(void)goDetail:(UIButton *)button{
  [self gotoBuzWithModuleName:@"detail" bundleName:@"detail.ios"];
}

-(void) gotoBuzWithModuleName:(NSString*)moduleName bundleName:(NSString*)bundleName{
  BOOL isSimulator = NO;
  #if TARGET_IPHONE_SIMULATOR
      isSimulator = YES;
  #endif
  UIViewController *rootViewController = [UIViewController new];
  NSString *businessBundlePath = [[NSBundle mainBundle] pathForResource:bundleName ofType:@"js" inDirectory:@"res"];
  NSString *commonBundlePath = [[NSBundle mainBundle] pathForResource:@"vendor.ios" ofType:@"js" inDirectory:@"res"];
  HippyBridge *bridge = [[HippyBridge alloc] initWithBundleURL:[NSURL fileURLWithPath:commonBundlePath] moduleProvider:nil launchOptions:nil];
  HippyRootView *rootView = [[HippyRootView alloc] initWithBridge:bridge businessURL:[NSURL fileURLWithPath:businessBundlePath] moduleName:moduleName initialProperties:  @{@"isSimulator": @(isSimulator)} launchOptions:nil shareOptions:nil debugMode:NO delegate:nil];
//  rootView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
  rootViewController.view = rootView;
  rootViewController.edgesForExtendedLayout = UIRectEdgeNone;
  [mainViewController.navigationController pushViewController:rootViewController animated:YES];
}

@end


