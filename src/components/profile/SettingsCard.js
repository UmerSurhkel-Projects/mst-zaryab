const SettingsCard = () => {
    return (
        <div class="settings-card">
            <div class="settings-control">
                <ul>
                    <li class="d-flex align-items-center">
                        <div>
                            <span>Desktop Notification</span>
                        </div>
                        <label class="switch ms-auto">
                            <input type="checkbox" checked="" />
                            <span class="slider round"></span>
                        </label>
                    </li>
                    <li class="d-flex align-items-center">
                        <div>
                            <span>Sound Notification</span>
                        </div>
                        <label class="switch ms-auto">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </li>
                    <li class="d-flex align-items-center">
                        <div>
                            <span>Profile privacy</span>
                        </div>
                        <label class="switch ms-auto">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </li>
                    <li class="d-flex align-items-center">
                        <div>
                            <span>Two-step security verification</span>
                        </div>
                        <label class="switch ms-auto">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="settings-footer">
                <ul class="p-0 mb-0">
                    <li>
                        <a href="#"><i class="fas fa-chevron-right"></i>  Need Help? Let's chat</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-chevron-right"></i>  English (united States)</a>
                    </li>
                </ul>
                <div class="profile-update text-center py-4">
                    <button type="button" class="btn btn-update mb-0">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SettingsCard