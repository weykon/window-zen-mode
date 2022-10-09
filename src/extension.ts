// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let toggleWindowedZenMode = vscode.commands.registerCommand('window-zen-mode.windowZenMode', () => {
		[
			"workbench.action.toggleStatusbarVisibility",
			"workbench.action.toggleTabsVisibility",
			"workbench.action.toggleActivityBarVisibility",
			"workbench.action.toggleSidebarVisibility",
			"editor.action.toggleMinimap"
		].forEach(e => {
			vscode.commands.executeCommand(e)
		})
	})
	context.subscriptions.push(toggleWindowedZenMode);
}

// This method is called when your extension is deactivated
export function deactivate() { }
