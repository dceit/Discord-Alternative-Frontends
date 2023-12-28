/**
 * @name Alternative Frontends
 * @author https://github.com/boydlowr
 * @description Replaces Discord links with privacy respecting frontends.
 * @version 0.0.1
 */

const Dispatch = BdApi.Webpack
	.getModule(BdApi.Webpack.Filters.byProps("dispatch", "subscribe"))

const replacer = [
	{
		match: 'youtube.com',
		embed: null,
		new: 'piped.video'
	},
	{
		match: 'youtu.be',
		embed: null,
		new: 'piped.video'
	},
	{
		match: 'twitter.com',
		embed: null,
		new: 'nitter.net'
	},
	{
		match: 'x.com',
		embed: null,
		new: 'nitter.net'
	},
	{
		match: 'fxtwitter.com',
		embed: null,
		new: 'nitter.net'
	}
]

BdApi.Patcher.before("TestPlugin", Dispatch, "dispatch", (_, args, original) => {
    const dispatch = args[0]

    if (!dispatch || dispatch.type !== "MESSAGE_CREATE")
    	return

	const content = dispatch.message.content;

	replacer.forEach(replace => {
		if(content.includes(replace.match)) {
			dispatch.message.content = content.replaceAll(replace.match, replace.new)
			dispatch.message.embeds = replace.embed
		}
	})
})

module.exports = () => {
	return {
		start: () => { },
		stop: () => { }
	}
}
